export interface Project {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  links: {
    label: string;
    url: string;
    type: "github" | "demo" | "drive" | "other";
  }[];
  date: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "studyqna",
    name: "AI Study Q&A Platform (StudyQnA)",
    shortDesc: "Hệ thống hỏi đáp học tập sử dụng AI (RAG)",
    fullDesc: `
      <p>StudyQnA là một nền tảng hỗ trợ học tập thông minh, tích hợp AI để giúp sinh viên tương tác với tài liệu cá nhân, tạo quiz tự động và giải đáp thắc mắc. Hệ thống sử dụng kiến trúc RAG để tối ưu việc tìm kiếm và truy xuất thông tin từ tài liệu.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Tính năng chính:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Upload và parsing tài liệu (vector embedding, semantic search).</li>
        <li>Tích hợp AI chat với LLM (Gemini/OpenAI) để hỏi đáp.</li>
        <li>Tạo quiz tự động từ tài liệu học tập.</li>
        <li>Quản lý lịch sử truy vấn và lưu trữ câu hỏi.</li>
        <li>Xác thực bảo mật với JWT và mã hóa token bằng Fernet.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Vai trò & Đóng góp:</h3>
      <p>Là <strong>Team Leader / Fullstack Developer</strong> (nhóm 3 thành viên), tôi đảm nhiệm:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Thiết kế kiến trúc hệ thống và xây dựng luồng xử lý RAG kết hợp FAISS.</li>
        <li>Phát triển Frontend bằng React, Vite, Tailwind CSS.</li>
        <li>Phát triển Backend API với FastAPI, quản lý database MongoDB.</li>
      </ul>`,
    techStack: ["React", "Tailwind CSS", "FastAPI", "MongoDB", "FAISS", "RAG", "LLM API", "JWT"],
    links: [
      {
        label: "Xem mã nguồn",
        url: "https://github.com/Dex-NCuong/DoAnChuyenNganh",
        type: "github",
      },
      {
        label: "Xem demo",
        url: "https://studyqna.vercel.app/",
        type: "demo",
      }
    ],
    date: "2025",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "web-doc-truyen",
    name: "Web Đọc Truyện Chữ",
    shortDesc: "Nền tảng đọc truyện trực tuyến",
    fullDesc: `
      <p>Website đọc truyện online mang lại trải nghiệm mượt mà trên nhiều thiết bị. Dự án cung cấp kho truyện với các chức năng tối ưu cho người đọc.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Tính năng:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Đọc truyện theo chương.</li>
        <li>Tìm kiếm và lọc truyện.</li>
        <li>Quản lý và cập nhật nội dung truyện.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Vai trò & Đóng góp:</h3>
      <p>Là <strong>Team Leader / Fullstack Developer</strong> (nhóm 3 thành viên), tôi chịu trách nhiệm:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Xây dựng giao diện frontend với HTML, CSS và JavaScript.</li>
        <li>Phát triển backend quản lý truyện và dữ liệu bằng Node.js.</li>
        <li>Thiết kế và truy vấn cơ sở dữ liệu MySQL.</li>
      </ul>
    `,
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
    links: [
      {
        label: "Xem mã nguồn",
        url: "https://github.com/Dex-NCuong/DoAn",
        type: "github",
      },
    ],
    date: "2025",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    id: "app-dem-buoc-chan",
    name: "App Đếm Bước Chân",
    shortDesc: "Ứng dụng theo dõi sức khỏe mobile",
    fullDesc: `
      <p>Ứng dụng di động giúp người dùng theo dõi số bước chân hàng ngày, tính toán lượng calo tiêu thụ và quãng đường đã đi. Đây là một công cụ hữu ích để duy trì thói quen vận động và nâng cao sức khỏe.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Đặc điểm:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Sử dụng cảm biến gia tốc để đếm bước.</li>
        <li>Giao diện trực quan, dễ nhìn.</li>
        <li>Lưu lịch sử tập luyện.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Vai trò & Đóng góp:</h3>
      <p>Là thành viên nhóm <strong>Mobile Developer</strong>, công việc chính bao gồm:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Nghiên cứu và xử lý dữ liệu từ cảm biến gia tốc.</li>
        <li>Thiết kế UI/UX cho ứng dụng mobile.</li>
        <li>Tối ưu hiệu năng và tiết kiệm pin.</li>
      </ul>
    `,
    techStack: ["React Native", "JavaScript"],
    links: [
      {
        label: "Xem demo",
        url: "https://drive.google.com/file/d/1cCrJnkYfVGhMKRGdgDQgYnYGxwJJWEYu/view?usp=drive_link",
        type: "drive",
      },
    ],
    date: "2025",
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    id: "zombie-game",
    name: "Zombie Survival Game",
    shortDesc: "Game sinh tồn với Unreal Engine 5",
    fullDesc: `
      <p>Zombie Survival Game là một dự án game hành động sinh tồn được phát triển trên nền tảng Unreal Engine 5. Người chơi sẽ phải đối mặt với làn sóng zombie không ngừng nghỉ, sử dụng vũ khí và chiến thuật để tồn tại.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Tính năng chính:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Hệ thống chiến đấu với nhiều loại vũ khí.</li>
        <li>AI zombie thông minh với hành vi đa dạng.</li>
        <li>Đồ họa 3D chất lượng cao với Unreal Engine 5.</li>
        <li>Hệ thống sóng zombie ngày càng khó hơn.</li>
        <li>Môi trường tương tác phong phú.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Vai trò & Đóng góp:</h3>
      <p>Là <strong>Game Developer</strong>, tôi đảm nhiệm:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Lập trình gameplay mechanics với C++ và Blueprint.</li>
        <li>Thiết kế và triển khai AI cho zombie.</li>
        <li>Tối ưu hóa hiệu năng game.</li>
        <li>Tích hợp assets và xây dựng môi trường game.</li>
      </ul>
    `,
    techStack: ["Unreal Engine 5", "C++", "Blueprint"],
    links: [
      {
        label: "Tải game về xem",
        url: "https://drive.google.com/file/d/12FVUm-W_aopfsU5oc8w47ve9Z_MBz_Ht/view",
        type: "drive",
      },
    ],
    date: "2025",
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
];
