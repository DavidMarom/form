const fs = require('fs');

export async function POST(request: Request) {
    const body = await request.json();

    fs.writeFile('form.json', JSON.stringify(body), (err: any) => {
        if (err) {
            console.error(err)
            return
        }
    }
    )
    
    return new Response(JSON.stringify(body), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}