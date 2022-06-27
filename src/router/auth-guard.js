const isAuthenticatedGuard= async(to,form,next)=>{

    return new Promise(()=>{

        const random =Math.random()*100
        if(random > 50){
            console.log('est autenticado')
            next()
        }else{
            console.log('bloqueado', random)
            next({name:'pokemon-home'})

        }
    })

}

export default isAuthenticatedGuard