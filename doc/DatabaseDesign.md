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

    Schools_Info : {
        school_name : < school name >,
        school_owner : < school owner id >,
        school_trainers: < array of school trainer id >,
        school_students : < array of student id >
        school_head_location : < school location >,
        school_phone_number: < school phone number >
        school_description : < school description >,
        school_classes : {
            < class_id > : {
                class_name : < class name >,
                class_location : < class location >,
                class_trainers : < array of class trainer's id >,
                class_students : < array of class student's id >
                class_description : < class's description >,
                other_info : < other information >
                training_history : {
                    < record id > : [{
                        trainers : < array of trainer's id >,
                        students : < array of student's id >,
                        time : <Class's time>,
                        .....
                    },....]
            },....
        }
    }

#### Description :

Collection này gồm các thông tin của võ đường, các record hoạt động của võ đường.

Mô tả các trường thông tin trong bảng :

| STT | Name                 | Type         | Description                                                 |
| --- | -------------------- | ------------ | ----------------------------------------------------------- |
| 1   | school_name          | string       | Tên của võ đường                                            |
| 2   | school_owner         | string       | id của người sáng lập võ đường, trỏ đến bảng persional info |
| 3   | school_trainers      | string array | id của các huấn luyện viên của võ đường                     |
| 4   | school_head_location | string       | trụ sở của võ đường                                         |
| 5   | school_phone_number  | string       | số điện thoại của võ đường                                  |
| 6   | school_description   | string       | Mô tả ngắn gọn về võ đường                                  |
| 7   | school_classes       | object       | trường thông tin về các class trong một võ đường            |
| 8   | class_id             | string       | id của một classs                                           |
| 9   | class_name           | string       | tên của lớp học                                             |
| 10  | class_location       | string       | địa chỉ lớp học                                             |
| 11  | class_trainers       | string array | id của các huấn luyện viên của võ đường                     |
| 12  | class_description    | string       | mô tả ngắn gọn về võ đường                                  |
| 13  | other_info           | string       | các thông tin khác về võ đường                              |
| 14  | TrainingHistory      | object       | trường thông tin mô tả về lịch sử luyện tập của võ đường    |
| 15  | record_id            | string       | id của bản ghi                                              |
| 16  | trainers             | string array | array id của các huấn luyện viên của buổi học               |
| 17  | students             | string array | array id của các học sinh tham gia buổi học                 |
| 18  | time                 | time         | thời điểm diễn ra buổi học                                  |
