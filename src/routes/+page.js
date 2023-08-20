
export async function load( ) {
    const endpoint = "https://bank.hackclub.com/api/v3/organizations/hacktheskyline"
    let apiData = await fetch(endpoint).then((r) => r.json())

    
    return {
        balance: apiData.balances
        
    }

  }