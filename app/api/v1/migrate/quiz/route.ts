export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const data = {
    "responseCode": "0200",
    "data": [
        {
            "question":"1. Kenapa kita harus punya e-mail?",
            "multipleChoice":[
                {
                    "lable":"A. Biar keren",
                    "value":"A"
                },
                {
                    "lable":"B. Sebagai tanda pengenal di internet",
                    "value":"B"
                },
                {
                    "lable":"C. Sebagai identitas warga negara",
                    "value":"C"
                },
                {
                    "lable":"D. Sebagai alat masuk ke bank",
                    "value":"D"
                }
            ]
        },
        {
            "question":"2. Verifikasi akun itu buat apa ya?",
            "multipleChoice":[
                {
                    "lable":"A. Memastikan keamanan informasi akun",
                    "value":"A"
                },
                {
                    "lable":"B. Membuat kamu keluar dari akun kamu",
                    "value":"B"
                },
                {
                    "lable":"C. Membuat akun kamu menjadi lemah",
                    "value":"C"
                },
                {
                    "lable":"D. Membuat akun kita dijaga oleh orang lain",
                    "value":"D"
                }
            ]
        },
        {
            "question":"3. Kenapa password kita harus dijaga?",
            "multipleChoice":[
                {
                    "lable":"A. Untuk memberikan akses ke orang lain",
                    "value":"A"
                },
                {
                    "lable":"B. Untuk memberikan data pribadi kita ke orang lain",
                    "value":"B"
                },
                {
                    "lable":"C. Untuk mengirimkan data orang lain ke kita",
                    "value":"C"
                },
                {
                    "lable":"D. Untuk mengamankan data pribadi maupun uang dalam rekening",
                    "value":"D"
                }
            ]
        },
        {
            "question":"4. Bagaimana bentuk password yang baik dan aman?",
            "answer":[
                {
                    "lable":"A. Kop!Pag1Enak",
                    "value":"A"
                },
                {
                    "lable":"B. Password",
                    "value":"B"
                },
                {
                    "lable":"C. 123456789",
                    "value":"C"
                },
                {
                    "lable":"D. 17Agustus1945",
                    "value":"D"
                }
            ]
        },
        {
            "question":"5. Hal apa yang bisa dilakukan di BRImo tapi belum ada di SenyuM?",
            "multipleChoice":[
                {
                    "lable":"A. Pembukaan Tabungan Emas",
                    "value":"A"
                },
                {
                    "lable":"B. Pembukaan Rekening Tabungan",
                    "value":"B"
                },
                {
                    "lable":"C. Booking Gadai",
                    "value":"C"
                },
                {
                    "lable":"D. Transfer ke rekening lain",
                    "value":"D"
                }
            ]
        }
    ],
    "responseDescription": "DONE_SUCCESS"
}
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
 
export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();
  const { name } = body;
 
  // e.g. Insert new user into your DB
  const newUser = {
    "responseCode": "0200",
    "data": {
        "correct": 5,
        "incorrect": 0,
        "score":100
    },
    "responseDescription": "DONE_SUCCESS"
}

  
 
  return new Response(JSON.stringify(newUser), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}