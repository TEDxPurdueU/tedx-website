/**
 * Current sponsors, in the order the sponsors page lists them.
 *
 * `logo` is a path under `static/sponsors`, or `null` until a sponsor sends
 * one — those tiles render the name as a wordmark instead, so a missing logo
 * never leaves a blank slot. `url` is optional; tiles without one are not links.
 *
 * @type {{ name: string, detail: string, url: string | null, logo: string | null }[]}
 */
export const sponsors = [
	{
		name: 'SFAB',
		detail: 'Student Fee Advisory Board, Purdue University',
		url: 'https://www.purdue.edu/sao/fundraising/soga-sfab.php',
		logo: null
	},
	{
		name: 'Department of Computer Science',
		detail: 'Purdue University',
		url: 'https://www.cs.purdue.edu',
		logo: null
	}
];
