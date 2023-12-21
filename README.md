<div align="center">

![logo-dark](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/496dd179-5fb5-4bae-ab16-153bf4a0f1b2)

# Red River Gorge

</div>
<div style="text-align: justify;">
Red River Gorge là một ứng dụng quản lý khách sạn thân thiện với người dùng. Ứng dụng này được thiết kế để quản lý hoạt động của khách sạn, bao gồm thống kê bán hàng, quản lý cabin, quản lý người dùng, quản lý đặt phòng và các tùy chọn tùy chỉnh khác nhau. Nó tích hợp tính năng xác thực, lưu trữ cơ sở dữ liệu và chế độ tối.

Mục đích của dự án này là triển khai các kỹ năng <b>Javascript</b>,<strong>Typescript</strong> và <strong>Truy vấn cơ sở dữ liệu</strong> nâng cao trong một ứng dụng web. Hơn nữa, giúp tôi nâng cao kiến thức về <strong>ReactJs</strong>.

</div>
## 🎮 Tài khoản DEMO

Bạn có thể truy cập ứng dụng thông qua tài khoản sau:

- **Email Address** : `test@example.com`
- **Password** : `tuanngoc0298`

## Các tính năng chính 📝

- Authentication và Authorization

  - Người dùng ứng dụng là nhân viên khách sạn. Họ có thể đăng nhập vào ứng dụng để thực hiện tasks.
  - Người dùng mới chỉ có thể được đăng ký bên trong ứng dụng (để đảm bảo rằng chỉ nhân viên thực tế của khách sạn mới có thể nhận được tài khoản).
  - Người dùng có thể tải lên hình đại diện và thay đổi tên và mật khẩu của họ

- Cabins

  - Ứng dụng có chế độ xem bảng với tất cả cabins, hiển thị cabin photo, name, capacity, price, và current discount.
  - Người dùng có thể update hoặc delete một cabin, và tạo cabins mới (bao gồm cả việc tải ảnh lên)

- Bookings

  - Ứng dụng có chế độ xem bảng với tất cả bookings, hiển thị ngày đến và ngày rời đi (arrival and departure dates), status, và paid amount, cũng như dữ liệu về cabin và guest.
  - Booking status có thể là "unconfirmed" (Đã book nhưng chưa check in), "checked in", hoặc "checked out". Bảng có thể lọc theo trạng thái quan trọng này.
  - Dữ liệu booking khác bao gồm: số lượng khách (guests), số lượng đêm thuê (nights),chú ý của khách (guest observations),liệu họ có đặt bữa sáng hay không, giá bữa sáng (breakfast price).

- Check In/Out

  - Người dùng có thể xóa, check-in hoặc check-out một booking khi khách đến
  - Booking có thể chưa được thanh toán cho đến khi khách đến. Vì thế khi check-in, khách phải chấp nhận thanh toán (ngoài app) và nhân viên sẽ xác nhận xem đã nhận được thanh toán chưa (bên trong app).
  - Khi nhận phòng, khách có thể thêm bữa sáng cho toàn bộ thời gian ở nếu chưa có.

- Guests

  - Dữ liệu khách bao gồm: full name, email, national ID, nationality, và country flag để dễ dàng nhận dạng.

- Dashboard

  - Màn hình app ban đầu phải là trang dashboard để hiển thị thông tin quan trọng trong 7, 30 hoặc 90 ngày qua:
    - Danh sách khách check-in và check-out trong ngày hiện tại. Người dùng (nhân viên) sẽ có thể thực hiện các tác vụ này từ đây.
    - Thống kê về lượng bookings, doanh số bán hàng (sales), lượt nhận phòng (check-ins) và tỷ lệ lấp đầy (occupancy rate) gần đây.
    - Biểu đồ hiển thị tất cả doanh số bán hàng hàng ngày của khách sạn, hiển thị cả doanh số "tổng" và doanh số "phụ" (hiện tại chỉ có bữa sáng).
    - Biểu đồ hiển thị số liệu thống kê về thời gian lưu trú (stay duration), vì đây là số liệu quan trọng đối với khách sạn

- Settings

  - Người dùng có thể chỉnh sửa một số cài đặt trên toàn ứng dụng: breakfast price, min và max nights/booking, max guests/booking

- App dark mode.

## Demo 🖥️

#### Login Page :

![wildoasisLogin](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/4f0ae08e-1f06-47db-92e2-7576c3075cb4)

#### Dashboard Page

![wildoasis1](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/9b814196-d9eb-4851-8249-dc1848271054)

![wildoasis1 1](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/301983d1-6c69-46ff-9a1e-94abf4a7b7d5)

#### Dark Theme Preview

![wildoasisTheme](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/1a5fd644-3c63-403f-a1ec-e6454b868dd6)

![wildoasisTheme2](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/d9ae2111-44f2-4cd9-8137-dee41d46aa10)

#### Bookings Details

![wildoasis2](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/71e559ad-03dc-48ee-ba89-04004d557d15)

#### Cabins Details

![wildoasis3](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/bd276ed2-1df6-44bd-b310-1b966e2069c9)

#### Users Profile Update Page

![wildoasis4](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/b281e182-04c5-4460-b1f0-a5bca0b7d99c)

#### Create User

![wildoasis5](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/cf372d7f-7e45-4463-8257-46037b110527)

#### Application Settings Page

![wildoasis6](https://github.com/tuanngoc0298/red-river-gorge/assets/75868787/a7051446-8a4a-474f-a93f-b5d963bd1ecd)

## 💻 Công nghệ sử dụng

Ứng dụng Quản lý Khách sạn Red River Gorge được xây dựng bằng các công nghệ và thư viện sau:

- **React**: JavaScript library cho việc phát triển UI .

- **Supabase**: Dịch vụ cơ sở dữ liệu đám mây để lưu trữ dữ liệu an toàn và real-time.

- **@tanstack/react-query**: Thư viện quản lý state và fetching dữ liệu trong React.

- **date-fns**: Thư viện tiện ích ngày tháng JavaScript để phân tích cú pháp, định dạng và thao tác ngày tháng.

- **react-router-dom**: Thư viện để routing và navigation trong React.

- **recharts**: Thư viện biểu đồ có thể kết hợp trong React.

- **styled-components**: CSS-in-JS thư viện để tạo kiểu cho các componnet React.

- **react-hot-toast**: Một thư viện Customizable toast notification trong React.

- **react-icons**: Bộ sưu tập các customizable icons trong React.

- **react-hook-form**: Thư viện để quản lý và xác thực state form trong React.

## 🛠️ Các bước cài đặt:

<p>1. Clone the repository</p>

```
git clone https://github.com/tuanngoc0298/red-river-gorge.git
```

<p>2. Install the required dependencies </p>

```
npm install
```

<p>3. Start the development server</p>

```
npm run dev
```

<p>4. Access the application at</p>

```
http://localhost:5173 or Your Local URL
```

## Xậy dựng với 🏗️

1. Javascript, Typescript
2. ReactJs, Redux, react-query (Front-end)
3. Styled Component (Styling)
4. Supabase (Database, backend)

## Deployed Version 🚀

Live demo 👉🏻 : https://red-river-gorge.vercel.app/
