# Firebase Realtime Database Structure 

{
    Students : {
        <student's id>: {
            name : <student's name>,
            age : <age>,
            gender : <gender>,
            email : <email>,
            level : <vovinam level>,
            ......
        },
        ....
    },
    Trainer : {
        <trainer's id> : {
            name : <trainer's name>,
            age : <age>,
            gender : <gender>,
            email : <email>,
            level : <vovinam level>,
            ..........
        },
        ......
    },
    TrainingHistory : {
        <place's name> : [{
            Trainer : [<trainer's id>, <trainer's id>, ....],
            Students : [<student's id>, <student's id>, ....],
            Time : <Class's time>,
            .....
        },....]

        
    }


}


