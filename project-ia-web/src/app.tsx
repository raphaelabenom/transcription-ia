import { Github, Wand2 } from 'lucide-react'
import { Button } from './components/ui/button'
import { Separator } from './components/ui/separator'
import { Label } from './components/ui/label'
import { Slider } from './components/ui/slider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from './components/ui/select'
import { Textarea } from './components/ui/textarea';
import { AudioInputForm } from './components/audio-input-form';

export function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Project IA</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Em desenvolvimento ❤️</span>
          <Separator orientation='vertical' className='h-6' />
          <Button variant="outline" className="rounded">
            <Github className="w-4 h-4 mr-2" />
            Github</Button>
        </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>

        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea className="resize-none p-4 leading-relaxed rounded" placeholder='Inclua o prompt para a IA...' />
            <Textarea className="resize-none p-4 leading-relaxed rounded" placeholder='Resultado gerado pela a IA...' readOnly />

          </div>
          <p className=' text-sm text-muted-foreground'> Lembre-se que você pode utilizar a variável <code className='text-violet-400'>{'{transcription}'}</code> </p>
        </div>

        <aside className='w-80 space-y-6'>

          <AudioInputForm /> {/* This is a custom component: Input Form*/}

          <Separator />

          <form className='space-y-6'>
            <div className='space-y-2'>
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Selecione um prompt' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='description'>Descrição</SelectItem>
                  <SelectItem value='subject'>Assunto</SelectItem>
                </SelectContent>
              </Select>
            </div>


            <div className='space-y-2'>
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT-3.5 Turbo 16K</SelectItem>
                </SelectContent>
              </Select>
              <span className='block text-xs text-muted-foreground italic' >Você poderá customizar essa opção em breve!</span>
            </div>

            <Separator />

            <div className='space-y-4'>
              <Label>Temperatura</Label>

              <Slider
                min={0.1}
                max={1}
                step={0.1}
              />

              <span className='block text-xs text-muted-foreground italic leading-relaxed' >Valores mais altos tende a deixar o resultado mais criativo e mais propenso ao erro</span>
            </div>

            <Separator />

            <Button type='submit' className='w-full rounded'>
              Executar <Wand2 className='w-4 h-4 ml-2' />
            </Button>

          </form>

        </aside>

      </main>
    </div>
  )
}