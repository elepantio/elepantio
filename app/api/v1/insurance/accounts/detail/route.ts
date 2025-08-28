export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const data = {
    responseCode: "0200",
    data: {
      priority: 1,
      productId: "asuransiBRILife",
      subProductID: "asuransiMikroKKM",
      name: "Asuransi Mikro KKM",
      accountName: "Pranopika Dianthari",
      memberNumber: "KTS12502060923000002",
      dueDate: "2025-08-13T14:52:44.248512Z",
      mekanismeKlaim:
        "1. Nasabah / Ahli Waris mendatangi Customer Service BRI Unit terdekat untuk mengajukan klaim dengan membawa kelengkapan dokumen :\n* Asli / Fotokopi bukti kepesertaan\n* Fotokopi Buku Tabungan\n* Dokumen sesuai jenis klaim\n2. Menerima dan melakukan Verifikasi dokumen-dokumen klaim sesuai jenis klaim yang diajukan / diisi Peserta Asuransi/Ahli Waris untuk dapat memutuskan apakah klaim diterima atau tidak. Pembayaran Klaim langsung dibayarkan ke Rekening Nasabah / Ahli Waris.\n3. Menerima Informasi dari Kantor Unit BRI setempat mengenai klaim yang telah diajukan nasabah / ahli waris.",
      document:
        "https://storage.googleapis.com/ceria-public-assets/senyum/user-manual/v4.pdf",
    },
    responseDescription: "DONE_SUCCESS",
  };
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
