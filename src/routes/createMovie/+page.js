
export async function load( { fetch } ) 
{
    const response = await fetch("/api/v1/priceTiers");
    const tiers = await response.json();
    return{

        tiers
    };
}