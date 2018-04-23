# Các hành động của nhóm

Ngoài những thao tác trong nhóm đơn giản như việc gửi tin nhắn và tải lên các tệp dữ liệu, bạn có thể thực hiện nhiều tương tác hơn thông qua Menu các hành động của nhóm. Menu các hành động của nhóm được đặt ở bên góc phải của khung tên nhóm. Một số tính năng có thể được truy cập bằng cách nhấn vào nút ba chấm ở phần cuối tiêu đề nhóm.  

_Các hành động của nhóm sẽ phụ thuộc vào tùy chỉnh của Server, vì vậy một số tùy chỉnh sẽ không được hiển thị trong danh sách._

## Nhóm yêu thích

Để giúp việc sắp xếp và phân biệt thứ tự các cuộc trò chuyện, bạn có thể đánh dấu nhóm **yêu thích** (hoặc **sao**), nhóm riêng tư, và DMs.

Để tạo nhóm yêu thích, nhấn vào ký tự ngôi sao ở góc trái của nhóm (bên cạnh tên phòng).

Khi một nhóm đã được đánh dấu là nhóm yêu thích thì nó sẽ được chuyển vào phần "Yêu thích", điều này sẽ giúp người dùng dễ dàng tìm kiếm và truy cập.

## Thông tin nhóm

Ở trong phần này, bạn có thể thấy toàn bộ các thông tin về nhóm đó. Những thông tin này bạn có thể chỉnh sửa nếu bạn có quyền phù hợp. Sau đây là một số thông tin của nhóm:

- __Tên nhóm__: Đây là tên của nhóm, đây là tên người dùng sẽ thấy và sẽ dùng nó để tìm kiếm.

- __Chủ đề__: Chủ đề sẽ được thể hiện ở bên cạnh tên của nhóm. Chủ đề giúp cho người dùng có cái nhìn tổng quan hơn về nhóm.

- __Thông báo__: Thông báo sẽ được hiển thị ở phía dưới tiêu đề của nhóm.

- __Mô tả__: Đây là phần mô tả của nhóm.

- __Riêng tư__: Thuộc tính này cho người dùng biết là nhóm có chế độ riêng tư hay không. Và thuộc tính này có thể được cài đặt là riêng tư hoặc công khai.

- __Chỉ đọc__: Thuộc tính này cho biết người dùng trong nhóm có quyền chỉ đọc tin nhắn hay không. Trong nhóm này, tin nhắn chỉ được gửi bởi những người có quyền nhất định. Nhóm này đa phần được dùng để gửi thông báo.

- __Đã lưu__: Thuộc tính này cho biết nhóm này có được lưu trữ hay không. Không một ai có thể gửi tin nhắn và tính năng tìm kiếm sẽ không hoạt động đối với nhóm này.

- __Mật khẩu__: Thuộc tính này cho biết nhóm này có mật khẩu hay không. Nếu một nhóm được cài mật khẩu, người dùng cần phải nhập mật khẩu để tham gia.

## Tìm kiếm tin nhắn

Goalify.Chat hỗ trợ bạn dễ dàng tìm kiếm tìm các lệnh, nó hoạt động giống như tìm kiếm của Gmail.

Goalify.Chat cũng hỗ trợ tìm kiếm thông qua  "[regular expressions](https://en.wikipedia.org/wiki/Regular_expression)".
Lợi ích của việc tìm kiếm thông qua regular expressions là tính linh hoạt và khả năng tìm kiếm các cuộc trò chuyện bằng bất kỳ ngôn ngữ nào, thậm chí với ngôn ngữ khó như Trung Quốc, Nhật Bản và Hàn Quốc.

### Các lệnh tìm kiếm đơn giản

Bạn có thể sử dụng các lệnh này trước hoặc sau khi điền vào cụm tìm kiếm:

`from:me` dùng để tìm kiếm các tin nhắn của người dùng đăng nhập hiện tại.

`from:user.name` dùng để tìm kiếm tin nhắn của một người dùng nhất định. Tên người dùng được nhập vào phải theo định dạng không có khoảng cách (Ví dụ như "john.doe" chứ không phải là "John Doe"). Để tìm lúc người dùng nào đó được nhắc đến chỉ cần tìm theo tên của họ.

`has:star` trả về tin nhắn đã được gắn sao của người dùng hiện tại.

`is:pinned` hoặc `has:pin` trả về tin nhắn đã được gắn của người dùng trong nhóm hiện tại.

`has:url` hoặc `has:link` trả về tin nhắn chứa đường dẫn trong nội dung.

`has:location` hoặc `has:map` trả về tin nhắn có vị trí đính kèm.

`before:dd/mm/yyyy`, `after:dd/mm/yyyy` và `on:dd/mm/yyyy` trả về tin nhắn đã được tạo trước hoặc sau ngày bạn tìm kiếm.

Định dạng gạch `dd-mm-yyyy` hoặc định dạng chấm `dd.mm.yyyy` có thể dùng để thay thế định dạng xuyệt.

`order:asc`, `order:ascend`, hoặc `order:ascending` sắp xếp tin nhắn theo thứ tự tăng dần theo thời gian.

`order:desc`, `order:descend`, hoặc `order:descending` sắp xếp tin nhắn theo thứ tự giảm dần theo thời gian.

Bạn cũng có thể chuyển tới vị trí của tin nhắn đó bằng cách di chuyển chuột vào kết quả tìm kiếm và nhấn vào `chuyển đến tin nhắn`.

### Regex

Những tài liệu này sẽ nói thêm về những tiềm năng của Regex:

- Wikipedia - <https://en.wikipedia.org/wiki/Regular_expression>
- Regex 101 - <https://regex101.com/#javascript>
- Regexr - <http://regexr.com/>
- Regex Info - <http://www.regular-expressions.info/javascriptexample.html>

## Danh sách thành viên

Ở đây, bạn có thể thấy tất cả các thành viên của nhóm và thông tin của từng người. Bạn có thể quản lý thành viên nếu có quyền phù hợp.

Đầu tiên, chỉ những người dùng đang ở chế độ hoạt động sẽ được hiển thị. Để thấy tất cả các người dùng, nhấn vào đường dẫn `hiển thị tất cả`.

Để xem nhiều thông tin hơn vể người dùng, nhấn chọn tên của họ trong danh sách. 

Tên người dùng, tên truy cập, phân quyền của người dùng và múi giờ của họ sẽ được hiển thị trên màn hình. Từ đó, bạn có thể thấy thêm:

- Bắt đầu một cuộc nói chuyện với người đó bằng cách bấm vào tùy chỉnh `cuộc trò chuyện`.

- Bắt đầu cuộc gọi hình ảnh với người dùng đó.

- Cài đặt quyền sở hữu nhóm cho người dùng đó.

- Cài đặt quyền kiểm duyệt nhóm cho người dùng đó.

- Khóa âm thanh người dùng.

- Xóa người dùng đó khỏi nhóm.

## Thông báo

Bạn có thể thay đổi hành động của thông báo cho từng nhóm. Mặc định, một nhóm sẽ thông báo bạn mỗi khi người dùng khác nhắc đến bạn hoặc sử dụng lệnh `@all`.

Sau đây là một số tùy chỉnh cho thông báo trên nhóm:

- __Tắt thông báo__: Tắt thông báo tin nhắn trong nhóm.

- __Âm thanh__: Tùy chỉnh để quyết định việc âm thanh được phát ra khi người dùng được nhắn đến hoặc có tin nhắn mới trong nhóm. Âm thanh thông báo có thể được chỉ định riêng.

- __Máy tính__: Quản lý cài đặt thông báo khi sử dụng Goalify.Chat trên máy tính hay trên trình duyệt web.

- __Di động__: Quản lý cài đặt thông báo khi sử dụng Goalify.Chat trên điện thoại di động.

- __Email__: Cài đặt gửi email thông báo khi có ai đó nhắc đến bạn hoặc gửi đến bạn một tin nhắn, bạn cũng có thể tắt tùy chỉnh gửi email thông báo.

- __Trạng thái phòng có tin nhắn chưa đọc__: Quản lý danh sách nhóm được đánh dấu khi có tin nhắn mới hay được nhắc đến.

- __Ký hiệu tin nhắn chưa đọc__: Quản lý các tin nhắn được đánh dấu chưa đọc khi có tin nhắn mới đến hoặc được nhắc đến trong nhóm hiện tại.

## Danh sách tập tin

Đây là một danh sách tất cả các tập tin được cập nhật từ nhóm hiện tại của bạn.

## Nhắc đến

Đây là nơi lưu trữ tất cả tin nhắn nhắc đến bạn trong nhóm hiện tại.

## Tin nhắn đã gắn sao

Đây là nơi lưu trữ tất cả các tin nhắn mà bạn đã gắn dấu sao trong nhóm hiện tại của bạn.

## Tin nhắn đã ghim

Đây là nơi lưu trữ tất cả các tin nhắn mà bạn đã ghim trong nhóm hiện tại của bạn.

## OTR

OTR là viết tắt của __Off The Record__.

OTR về cơ bản là để mã hóa các cuộc hội thoại.

Bạn có thể chỉ sử dụng OTR trực tiếp trong các tin nhắn (tin nhắn một-một) và cả trong các nhóm trực tuyến mà bạn tham gia.

Để bắt đầu một cuộc trò chuyện OTR, nhấn chọn _START OTR_. Các người dùng khác cũng sẽ nhận được thông báo để bắt đầu sử dụng OTR.

Sau yêu cầu của bạn được chấp nhận bởi những người dùng khác, tin nhắn của bạn sẽ được mã hóa. Tin nhắn đã được mã hóa phải có một biểu tượng khóa ở phía bên phải.  
