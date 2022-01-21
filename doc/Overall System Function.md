
# Hệ thống quản lý học viên Vovinam 

## 1. Functional
Cần một ứng dụng/web để thực hiện các công việc sau : 

### Đối với học viên :
 - Học viên nhập thông tin đăng ký 
 - Học viên nhận được kết quả theo dõi luyện tập : thông tin nội dung buổi tập theo ngày, tần suất tập luyện theo tháng ....
 - Học viên nhận được các thông báo của võ đường 

### Đối với quản lý võ đường : 
 - Điểm danh học viên tập luyện 
 - Thông tin buổi đứng lớp của 1 võ sư ( 1 võ đường có thể có nhiều võ sư và đứng các lớp khác nhau )
 
==>> các thông tin xuất ra dưới dạng các biểu đồ trực quan 

## 2. Chức năng chi tiết

### web/app dành cho học viên : 

| Chức năng                  | Mô tả                                                                            |
| -------------------------- | --- |
| Đăng ký thông tin học viên | Học viên sẽ tự đăng ký các thông tin cá nhân trên web hoặc app khi đăng ký tại một võ đường sẽ tự động tạo đơn đăng ký và gửi võ đường , khi được accept bởi chủ võ đường sẽ được tự động thêm vào võ đường đó                 |
| Thông báo         | Kết quả tập luyện cuối buổi , cuối tháng, học phí <br/> Thông tin mới nhất của võ đường|
| Lịch sử hoạt động | Lịch sử luyện tập                                                                         |
| Biểu đồ           | Biểu đồ tập luyện                                                                         |

### web/app dành cho cấp quản lý : 
| Chức năng | Mô tả                                                                  |
| --------- | ---------------------------------------------------------------------- |
| Đăng ký   | Thông tin cá nhân, đăng ký thông tin võ đường                          |
| Thông báo | Tạo thông báo đến học viên của võ đường                                |
| Biểu đồ   | Biểu đồ đứng lớp của các võ sư, thông tin tiền công đứng lớp mỗi tháng |
| Phê duyệt | Phê duyệt yêu cầu đăng nhập võ đường                                   |
| Điểm danh | Điểm danh học viên mỗi buổi                                            |

### Các chức năng khác cần phát triển : 
- Phân cấp và phân quyền trong những người quản lý võ đường 
- Một trang giới thiệu về từng võ đường và các thông tin nội dung bài học của võ đường đó 
- Hệ thống chat nội bộ ...
- Mã QR để lấy thông tin học viên 
- Thư viện thông tin về vovinam ( các bài luyện tập từng cấp, nội dung lý thuyết , lịch sử , ….)


## Thiết kế cơ sở dữ liệu : 

- Cơ sở dữ liệu học viên 
- Cơ sở dữ liệu võ sư
- Cơ sở dữ liệu luyện tập 
- Cơ sở dữ liệu võ đường 


## Thiết kế giao diện :

- Giao diện đăng nhập 
- Giao diện đăng ký thông tin học viên 
