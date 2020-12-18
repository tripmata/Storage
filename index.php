<?php
// set the response content type
header('Content-Type: application/json');

// constants
define('ACTION', 0);
define('FOLDER', 1);
define('FILE',   2);

// handle json response
$reply = function(array $data) : bool 
{
    // build json data
    echo json_encode($data, JSON_PRETTY_PRINT);

    // return bool
    return false;
};

// can we continue
if (isset($_SERVER['PATH_INFO'])) :

    // get path
    $path = explode('/', ltrim($_SERVER['PATH_INFO'], '/'));

    // Do we have action and folder ?
    if (count($path) < 2) return $reply([
        'status' => 'error',
        'message' => 'Missing Action or Folder'
    ]);

    // ok let's verify action
    switch($path[ACTION]) :

        // handle upload
        case 'upload':

            // check if folder exists
            if (!is_dir(__DIR__ . '/' . $path[FOLDER])) return $reply([
                'status' => 'error',
                'message' => 'Folder "'.$path[FOLDER].'" does not exists.'
            ]); 

            // include upload script
            include_once __DIR__ . '/Upload.php';

            // @var string $filename
            $filename = '';

            // make upload now for file.
            if (isset($_FILES['file'])) :

                $upload = new Upload($_FILES['file']);

                // set file unique name
                $newN = md5(mt_rand(1000,9999).mt_rand(1000,9999).mt_rand(1000,9999).mt_rand(1000,9999));

                while(file_exists($path[FOLDER] . "/".$newN.".".$upload->Extension))
                {
                    // generate file unique name again if found.
                    $newN = md5(mt_rand(1000,9999).mt_rand(1000,9999).mt_rand(1000,9999).mt_rand(1000,9999));
                }

                // set file name
                $filename = $newN.".".$upload->Extension;

                // save file now
                $upload->Save($path[FOLDER], $filename);

            endif;
            
            // all good
            if ($filename != '') return $reply([
                'status' => 'success',
                'data' => $filename
            ]);

            // failed
            $reply([
                'status' => 'error',
                'message' => 'No file uploaded.'
            ]);

        break;

        // handle delete
        case 'delete':

            // check if folder exists
            if (!is_dir(__DIR__ . '/' . $path[FOLDER])) return $reply([
                'status'  => 'error',
                'message' => 'Folder "'.$path[FOLDER].'" does not exists.'
            ]); 

            // check if file was sent
            if (!isset($path[FILE])) return $reply([
                'status'  => 'error',
                'message' => 'File was not passed'
            ]);

            // build file path
            $file = __DIR__ . '/' . $path[FOLDER] . '/' . $path[FILE];

            // check if file exists
            if (!file_exists($file)) return $reply([
                'status'  => 'error',
                'message' => 'File "'.$file.'" does not exists'
            ]);

            // delete file
            unlink($file);

            // all good
            $reply(['status' => 'success', 'message' => 'File deleted successful']);

        break;

    endswitch;

endif;