import { ContainerVertical } from '@/ui/ContainerVertical';
import { Container } from '@/ui/Container';
import { Button } from '@/ui/Button';

export default function NotFound() {
  return (
    <ContainerVertical className='py-16'>
      <Container className='text-center max-w-3xl'>
        <h1>Seite nicht gefunden</h1>
        <p className='mt-8'>Wir konnten diese Seite leider nicht finden.</p>
        <p className='mt-4'>
          Gründe dafür könnten sein, dass Sie eine falsche oder veraltete URL
          aufgerufen haben. Wir bitten Sie, diese noch einmal zu überprüfen. Es
          ist auch möglich, dass wir die betreffende Seite verschoben,
          archiviert oder umbenannt haben.
        </p>
        <Button className='inline-block py-2 font-medium mt-12' path='/'>
          Zur Startseite
        </Button>
      </Container>
    </ContainerVertical>
  );
}
