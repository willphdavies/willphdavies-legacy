import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import "./Experience.scss"

export function Experience() {
	return (
		<div className="page-experience">
			<Grid className="page-experience__grid" container spacing={3}>
				<Grid item>
					<a className="grid__link" target="_blank" href="https://www.smarsh.com/">
						<Card>
							<CardHeader
								avatar={<Avatar>S</Avatar>}
								action={<IconButton><MoreVert></MoreVert></IconButton>}
								title="Smarsh"
								subheader="Lead / Senior Javascript Developer"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									Email / Messaging archiving - Developing the Search and Supervision applications for clients to be able to interact with all of the archived data.  Complex application built in VueJS, fully unit tested and handed off to QE for integration testing. Large push for CI/CD.  Also required to maintain, refactor and improve the current production application written with .net (RAZR files, jQuery etc).  
								</Typography>
							</CardContent>
						</Card>
					</a>
				</Grid>
				<Grid item>
					<a className="grid__link" target="_blank" href="https://www.soliddigital.com/">
						<Card>
							<CardHeader
								avatar={<Avatar>S</Avatar>}
								action={<IconButton><MoreVert></MoreVert></IconButton>}
								title="Solid Digital"
								subheader="Full Stack Developer"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									Development agency centered around Javascript (NodeJS + Frontend).  AWS Stack.  Various projects, such as internet startups (Mongo / NodeJS), ecommerce projects (Magento / WooCommerce), salesforce and third party system integrations.  Frontend integration using VueJS.  Communicating technical aspects of contracted work with clients, maintaining test documentation, and helping manage resourcing for multiple projects.  Mentoring other members of the team as well as interns and responsible for education in new web technologies and best practices.
								</Typography>
							</CardContent>
						</Card>
					</a>
				</Grid>
				<Grid item>
					<a className="grid__link" target="_blank" href="https://www.zoomcare.com">
						<Card>
							<CardHeader
								avatar={<Avatar>Z</Avatar>}
								action={<IconButton><MoreVert></MoreVert></IconButton>}
								title="Zoomcare"
								subheader="Full Stack Developer"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									Brought on to lead the front end team in modernizing the Drupal based web stack.  Incorporated NodeJS / AngularJS to work in conjunction with the JAVA based REST API.  Implemented a bash deploy script, backed by a grunt build in order to streamline deployment from Ubuntu workstations to CentOS dev and QA stacks.  Migrated the home grown CSS into a SASS / Bootstrap based modular framework.  Architecture of a more coherent set of REST API endpoints.  Setup memcache to improve site speed.  Set up Google Analytics event driven framework to better track user behaviour.  Managed Git workflow.  Selenium Integration Tests / Karma-Jasmine Unit tests
								</Typography>
							</CardContent>
						</Card>
					</a>
				</Grid>
				<Grid item>
					<a className="grid__link">
						<Card>
							<CardHeader
								avatar={<Avatar>H</Avatar>}
								action={<IconButton><MoreVert></MoreVert></IconButton>}
								title="Highlight City"
								subheader="Full Stack Developer"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									Working remotely for a start-up company based in Barcelona creating a social media ticket sales and event promotion management platform for the various clubs in and around Barcelona and the Balearic Isles.  Project was started by a number of developers with little experience, hence it was necessary to redesign the entire framework (recycling as much of the code as possible), implement a mercurial based version control / release system.  Application requires a slick interface, Google+ / Facebook API integration and multiple user roles and a fine grained ACL.
								</Typography>
							</CardContent>
						</Card>
					</a>
				</Grid>
				<Grid item>
					<a className="grid__link">
						<Card>
							<CardHeader
								avatar={<Avatar>P</Avatar>}
								action={<IconButton><MoreVert></MoreVert></IconButton>}
								title="Profitable Web Projects"
								subheader="Lead Developer"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
									Lead developer in a number of different projects, responsible for maintaining the quality and structural integrity of the codebase to ensure that it is easily understood by any new developers who begin working on it. Maintaining each version/release of the code via the use of versioning software (Mercurial/SVN) and database comparison tools. Management of junior developers workflow and ensuring that the final product adheres correctly to the intended specification.
								</Typography>
							</CardContent>
						</Card>
					</a>
				</Grid>
				<Grid item>
					<a className="grid__link">
						<Card>
							<CardHeader
								avatar={<Avatar>P</Avatar>}
								action={<IconButton><MoreVert></MoreVert></IconButton>}
								title="Self Employed"
								subheader="English Teacher"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
								Self-Employed English teacher in Barcelona working primarily with health institutions such as CatSalut and Hospital Vall D’Hebron.  Work also includes training for presentations, interpretation and translation.
								</Typography>
							</CardContent>
						</Card>
					</a>
				</Grid>
				<Grid item>
					<a className="grid__link">
						<Card>
							<CardHeader
								avatar={<Avatar>P</Avatar>}
								action={<IconButton><MoreVert></MoreVert></IconButton>}
								title="Equifax PLC"
								subheader="English Teacher"
							/>
							<CardContent>
								<Typography variant="body2" color="textSecondary" component="p">
								Data Extraction, Retrospective Analysis and Credit Scoring. Product Manager of a Customer Identification and Customer Location product (often used for debt recovery).  Created a number of automated reporting tools used both internally and externally including a client information database, a client benchmarking reporter and a client report generator for individual analyses all using a combination of SAS Output files, VBA, Word, Excel and Access.
								</Typography>
							</CardContent>
						</Card>
					</a>
				</Grid>
			</Grid>
		</div>
	)
}
