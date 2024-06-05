import { Form, Card01 } from './components';
import { heb } from '@/app/types/lang';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Card01 label={heb.clientDetails}  >
        <Form />
      </Card01>
    </main>
  );
}
