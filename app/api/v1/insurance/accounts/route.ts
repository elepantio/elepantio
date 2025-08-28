export async function GET(request: Request) {
  // For example, fetch data from your DB here
  const data = {
    "responseCode": "0200",
    "data": [
        {
            "priority":1,
            "productId":"asuransiBRILife",
            "subProductID":"asuransiMikroKKM",
            "name":"Asuransi Mikro KKM",
            "accountNumber":"13311911010003232",
            "dueDate":"2025-08-13T14:52:44.248512Z"

        }
    ]
    ,
    "responseDescription": "DONE_SUCCESS"
}
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
 
