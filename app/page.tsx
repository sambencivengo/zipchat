import { FlaskForm } from '~/app/components/flaskForm';
import { PageLayout } from '~/app/components/layouts/pageLayout';
import { cn } from '~/lib/utils';

export default async function Home() {
  return (
    <PageLayout>
      <FlaskForm />
    </PageLayout>
  );
}
