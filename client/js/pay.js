
    function payWithPaystack(o, func)
    {
        let p_key = "pk_test_86d32aa1nV4l1da7120ce530f0b221c3cb97cbcc";
        let email = "invoices@gigahotels.com";
        let amount = 0;
        let payment = "";
        let currency = "NGN";

        if(o != null)
        {
            if(o.Email != null)
            {
                email = o.Email;
            }
            if(o.Key != null)
            {
                p_key = o.Key;
            }
            if(o.Amount != null)
            {
                amount = Number(o.Amount);
            }
            if(o.Ref != null)
            {
                payment = o.Ref;
            }
            if(o.Currency != null)
            {
                currency = o.Currency;
            }
        }


        let handler = PaystackPop.setup({
            key: p_key,
            email: email,
            amount: (amount),
            currency: currency.toUpperCase(),
            ref: payment, // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            metadata: {
                custom_fields: [
                    {
                        display_name: "Congredia",
                        variable_name: "mobile_number",
                        value: "+2348012345678"
                    }
                ]
            },
            callback: function(response){
                if(typeof func == "function")
                {
                    func(response.reference, "success");
                }
            },
            onClose: function(){
                if(typeof func == "function")
                {
                    func("EXITED", "error");
                }
            }
        });

        if((payment != "") && (amount > 0))
        {
            handler.openIframe();
        }
        else
        {
            if(typeof func == "function")
            {
                func("INCOMPLETE_INFO","error");
            }
        }
    }


    function ConfirmPay()
    {

    }