const zod = require('zod');

function validate_password(obj){
    const schema = zod.object({
        password : zod.string().min(8).regex(/[!@#$%^&*()_+]/)
    })
    const response = schema.safeParse(obj)
    console.log(response)
}

validate_password({
    password : "netra%2002"
})