import { Card, CardContent, CardFooter } from '../components/card'
import { Grid } from '../components/grid'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../components/dialog"
import { SkillDescription } from '../components/skill-description'
import { skills } from '@portfolio/lib'
import { Logo } from '../components/logo/logo'

export const Skills = () => {
  return (
    <div className='grid grid-cols-1 mt-[-8px] sm:mt-0 sm:grid-cols-2 lg:grid-cols-4'>
      {skills.map((skill, index) => {
        return (
          <Dialog key={index}>
            <DialogTrigger>
              <Card className='hover:border-neutral-600 rounded-none'>
                <Grid>
                  <CardContent className='flex justify-center items-center h-40'>
                    <Logo alt={skill.name} src={skill.icon} />
                  </CardContent>
                </Grid>
                <CardFooter className='py-4 text-neutral-100 font-bold flex justify-center items-center rounded-b-lg bg-black'>
                  {skill.name}
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle className='flex justify-center'>
                <Logo alt={skill.name} src={skill.icon} />
              </DialogTitle>
              <SkillDescription
                description={skill.description}
                level={skill.level}
                usage={skill.usage} />
            </DialogContent>
          </Dialog>
        )
      })}
    </div>
  )
}
