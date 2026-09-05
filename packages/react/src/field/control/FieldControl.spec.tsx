import * as React from 'react';
import { Field } from '@obstudio/react/field';

function App() {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  return <Field.Control ref={ref} render={<textarea />} />;
}
