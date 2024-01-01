const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const year = 2024;
const year_start = `${year}-01-01T00:00:00Z`;
const year_end = `${year}-12-31T23:59:59Z`;

const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection(from: "${year_start}", to: "${year_end}") {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}
`;

export async function retrieveContributionData(userName) {
  const variables = `
  {
    "userName": "${userName}"
  }
`
  const body = {
    query,
    variables
  }
  const result = fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body)
  }).then((res) => {
    return res.json();
  }).then(data => {
   
      const { data: { user: { contributionsCollection: { contributionCalendar: { totalContributions, weeks }} }} } = data;
    let contributionDays = weeks.reduce(((prev, cur) => {
      return prev.concat(cur.contributionDays)
    }),[]);

    /* 
        Calculate contributions since 1/1/2024
    */
    contributionDays = contributionDays.filter((day) => {
      const current_year = process.env.TARGET_YEAR;
      return day["date"].includes(`${current_year}`);
    });
    return contributionDays;
  }).catch(err => console.log(err));

  return result;
}

export async function calculateStreak(arrayOfContributions) {
  let last_contribution_day = undefined;
  let has_already_commited = false;
  /*
    contribution : {
      contributionCount,
      date,
    }
  */
  for(const contribution in arrayOfContributions){
    const date = contribution.date;
    const count = contribution.contributionCount;
    
  }

}