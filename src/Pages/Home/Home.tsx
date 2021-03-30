import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom"
import "./Home.scss"

export function Home() {
	return (
		<Grid className="page-home" container spacing={3}>
			<Grid item>
				<Link className="page-home__link" to="/Experience">
					<Card>
						<CardHeader
							avatar={<Avatar>E</Avatar>}
							action={<IconButton><MoreVert></MoreVert></IconButton>}
							title="Experience"
							subheader="Work & Achievements"
						/>
						<CardMedia className="link__img" image="/experience.jpeg" title="Experience" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Wanna know what I've been up to professionally during my 13+ years of working in tech?  Read more here...
							</Typography>
						</CardContent>
					</Card>
				</Link>
			</Grid>
			<Grid item>
				<Link className="page-home__link" to="/Projects">
					<Card>
						<CardHeader
							avatar={<Avatar>E</Avatar>}
							action={<IconButton><MoreVert></MoreVert></IconButton>}
							title="Projects"
							subheader="Things I've done..."
						/>
						<CardMedia className="link__img" image="/project.jpeg" title="Projects" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								A showcase for some of my work, from Admin applications, to maps and much much more...
							</Typography>
						</CardContent>
					</Card>
				</Link>
			</Grid>
			<Grid item>
				<Link className="page-home__link" to="/Philosophy">
					<Card>
						<CardHeader
							avatar={<Avatar>E</Avatar>}
							action={<IconButton><MoreVert></MoreVert></IconButton>}
							title="Philosophy"
							subheader="Coding Style"
						/>
						<CardMedia className="link__img" image="/philosophy.jpg" title="Projects" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								What I've found to be the best patterns and organizational principals to follow
							</Typography>
						</CardContent>
					</Card>
				</Link>
			</Grid>
			<Grid item>
				<Link className="page-home__link" to="/Qualifications">
					<Card>
						<CardHeader
							avatar={<Avatar>E</Avatar>}
							action={<IconButton><MoreVert></MoreVert></IconButton>}
							title="Qualifications"
							subheader="Educations"
						/>
						<CardMedia className="link__img" image="/education.jpeg" title="Education" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								It's been a while, but I did go to university, many moons ago...
							</Typography>
						</CardContent>
					</Card>
				</Link>
			</Grid>
			<Grid item>
				<Link className="page-home__link" to="/Interests">
					<Card>
						<CardHeader
							avatar={<Avatar>E</Avatar>}
							action={<IconButton><MoreVert></MoreVert></IconButton>}
							title="Interests"
							subheader="Interests"
						/>
						<CardMedia className="link__img" image="/guitar.jpg" title="Interests" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Wanna find out what makes me tick outside of creating awesome Frontend Web Applications..?
							</Typography>
						</CardContent>
					</Card>
				</Link>
			</Grid>
		</Grid>
	)
}
