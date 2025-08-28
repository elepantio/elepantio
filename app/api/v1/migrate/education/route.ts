import { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page");

  let data = {
    responseCode: "0200",
    data: {
      title: "Punya e-mail, makin mudah akses apa saja!",
      introMessage:
        "Kalau kamu punya alamat e-mail, kamu bisa lebih gampang pakai layanan online. Kenapa?",
      outroMessage:
        "Jadi, kalau sudah punya e-mail, kamu bisa lebih bebas pakai berbagai aplikasi online!",
      image:
        "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
      list: [
        {
          icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
          content:
            "**E-mail itu tanda pengenalmu** di Internet karena banyak aplikasi yang butuh e-mail untuk daftar.",
        },
        {
          icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
          content:
            "**E-mail buat jaga keamanan** karena biasanya dipakai untuk cek ulang (verifikasi) supaya akun kamu aman.",
        },
      ],
      tips:null
    },

    responseDescription: "DONE_SUCCESS",
  };
  switch (page) {
    case "2":
      data = {
        responseCode: "0200",
        data: {
          title: "Jaga passwordmu baik-baik!",
          introMessage:
            "Password itu ibarat kunci rumah. Kalau orang lain tahu, mereka bisa masuk ke akun kamu dan pakai seenaknya. Akibatnya, data pribadi bahkan uangmu bisa berisiko hilang. Cara mudah menjaga password:",
          outroMessage:
            "Ingat, password itu rahasia milikmu sendiri. Dengan jaga password, kamu ikut melindungi data dan transaksi biar tetap aman.",
          image:
            "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
          list: [
            {
              icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
              content: "Jangan kasih tahu password ke siapa pun.",
            },
            {
              icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
              content:
                "Jangan tulis password di tempat yang gampang dilihat orang.",
            },
          ],
          tips:null
        },
        

        responseDescription: "DONE_SUCCESS",
      };

      break;
    case "3":
      data = {
        responseCode: "0200",
        data: {
          title: "Mau transaksi lebih mudah?\nInstall BRImo sekarang!",
          introMessage: "Kami dengar kebutuhan kamu! Kenapa harus pakai BRImo?",
          outroMessage:
            "Aman dan lengkap, yuk cek kesiapan kamu untuk Install BRImo!",
          image:
            "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
          list: [
            {
              icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
              content:
                "Fiturnya lebih lengkap: Transfer uang, beli pulsa, sampai bayar tagihan, semua bisa di satu aplikasi.",
            },
            {
              icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
              content:
                "Punya tabungan emas? Bisa langsung beli, jual, bahkan cetak emas melalui BRImo.",
            },
            {
              icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
              content:
                "Kartu ATM hilang? Tenang, kartunya bisa diblokir lewat BRImo.",
            },
          ],
          tips: {
            title: "Tips Aman pakai BRImo",
            list: [
              {
                icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
                type: "info",
                content:
                  "**Buat Username & Password yang unik,** jangan pakai tanggal lahir, angka berurutan atau mudah ditebak. Password juga tidak boleh sama dengan Username, ya!",
              },
              {
                icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
                type: "error",
                content: "`Contoh yang salah:` \nUsername, 123456, 01011998",
              },
              {
                icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
                type: "success",
                content: "`Contoh yang benar:` \nAkhmad.Ramadhan, ARamadhan45",
              },
              {
                icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
                type: "info",
                content: "**Jangan pakai tanggal lahir untuk PIN.**",
              },
              {
                icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
                type: "info",
                content:
                  "**Jangan pernah kasih tahu Username, Password, dan PIN kamu ke orang lain. **",
              },
              {
                icon: "https://storage.googleapis.com/ceria-public-assets/senyum-mobile-product-info/CicilEmas-Alur-1.svg",
                type: "info",
                content:
                  "**Rutin ganti Password dan PIN supaya akun lebih aman.**",
              },
            ],
          },
        },

        responseDescription: "DONE_SUCCESS",
      };
      break;
    default:
      break;
  }

  return new Response(
    JSON.stringify(data),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
