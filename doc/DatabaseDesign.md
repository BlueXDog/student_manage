# Firebase Realtime Database Structure 

{
    Students : {
        "id": {
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
        "id" : {
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
        place1 : {
            Trainer : [<trainer's id>, <trainer's id>, ....],
            Students : [<student's id>, <student's id>, ....],
            Time : <Class's time>,
            .....
        },

        
    }


}


