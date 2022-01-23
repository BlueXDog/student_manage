# Firebase Firestore Structure

## Persional Info Collection

#### Structure :

    Persional_info : {
        <persional's id>: {
            name : <student's name>,
            age : <age>,
            gender : <gender>,
            email : <email>,
            phone_number : < phone number của một >
            level : <vovinam level>,
            persional_record : < persional record of training >,
            qr_code : < persional qr code >
        },
        ....
    }

#### Description :

Collection student dùng để lưu các thông tin cá nhân của các học viên và huấn luyện viên

Mô tả các trường thông tin trong bảng :

| STT | Name             | Type    | Description                                                                                                   |
| --- | ---------------- | ------- | ------------------------------------------------------------------------------------------------------------- |
| 1   | persional's id   | string  | id cá nhân trên hệ thống                                                                                      |
| 2   | age              | number  | thông tin độ tuổi                                                                                             |
| 3   | gender           | string  | giới tính, giá trị là male hoặc female                                                                        |
| 4   | email            | string  | địa chỉ mail                                                                                                  |
| 5   | phone_number     | string  | số điện thoại liên hệ                                                                                         |
| 6   | level            | string  | cấp đai hiện tại, giá trị chỉ giới hạn trong các cấp đai được quy định                                        |
| 7   | persional_record | object  | bảng record cá nhân về lịch sử tập luyện, các trường thông tin được định nghĩa sau để tạo các biểu đồ cá nhân |
| 8   | qr_code          | unknown | mã qr code để lấy các thông tin cá nhân                                                                       |

## Collection School Info

#### Structure :

    Schools : {
        school_name : < school name >,
        school_owners : < array of school owner id >,
        school_trainers: < array of school trainer id >,
        school_students : < array of student id >
        school_head_location : < school location >,
        scholl_phone_number: < school phone number >
        school_description : < school description >,
        school_classes : {
            < class_id > : {
                class_name : < class name >,
                class_location : < class location >,
                class_trainers : < array of class trainer's id >,
                class_description : < class's description >,
                other_info : < other information >
                TrainingHistory : {
                    < record id > : [{
                        Trainer : < array of trainer's id >,
                        Students : < array of student's id >,
                        Time : <Class's time>,
                        .....
                    },....]
            },....
        }
    }

#### Description :

Collection này gồm các thông tin của võ đường, các record hoạt động của võ đường.

Mô tả các trường thông tin trong bảng :

| STT | Name | Type | Description |
| --- | ---- | ---- | ----------- |
|1||||