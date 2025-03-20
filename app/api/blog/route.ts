export async function GET() {
  const posts = [
    {
      id: 1,
      title: "React Native ile Mobil Uygulama Geliştirme",
      content:
        "React Native, JavaScript ve React kullanarak mobil uygulamalar geliştirmenizi sağlar...",
    },
    {
      id: 2,
      title: "Electron.js ile Masaüstü Uygulama Geliştirme",
      content:
        "Electron.js, web teknolojileriyle masaüstü uygulamaları geliştirmenize olanak tanır...",
    },
    {
      id: 3,
      title: "Appwrite ile Backend Yönetimi",
      content:
        "Appwrite, geliştiricilere hazır bir backend çözümü sunarak, hızlı ve güvenli uygulamalar geliştirmelerini sağlar...",
    },
  ];
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
