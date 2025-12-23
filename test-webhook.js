
// using native fetch


// If node version is recent (18+), fetch is global. If not we might need to import or assume it exists.
// We'll assume Node 18+ which has global fetch.

const webhookUrl = "https://discord.com/api/webhooks/1250848907475550289/S2NS3Mfvdc8D04eqqxXCzRC1PpRwwil1C1JZb2wPZMyH8c8xRVVhGt9vNSsx1_UM6PaG";

async function testWebhook() {
    console.log("Testing webhook...");
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: "🔔 **Webhook Test from Antigravity**\nThis is a verification message to confirm the webhook is working correctly."
            })
        });

        if (response.ok) {
            console.log("✅ Webhook test passed! Message sent successfully.");
        } else {
            console.error("❌ Webhook test failed with status:", response.status);
            const text = await response.text();
            console.error("Response:", text);
        }
    } catch (error) {
        console.error("❌ Webhook test error:", error);
    }
}

testWebhook();
