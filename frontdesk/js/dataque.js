
    let DataQue = function(name, job)
    {
        let dbname = name;

        this.add = function(data)
        {
            let d = JSON.parse(window.localStorage.getItem(dbname));
            d.push(data);
            window.localStorage.setItem(dbname, JSON.stringify(d));
        };

        this.insert = function(data)
        {
            let d = JSON.parse(window.localStorage.getItem(dbname));
            d.push(data);
            window.localStorage.setItem(dbname, JSON.stringify(d));
        };
        
        this.listData = function () {
            
        };

        this.getWhere = function(field, value)
        {
            
        };
        
        this.deleteWhere = function (field, value) {
            
        };

        this.updateWhere = function(field, value)
        {

        };
        
        this.dispose = function () {
            window.localStorage.removeItem(dbname);
        };
    };