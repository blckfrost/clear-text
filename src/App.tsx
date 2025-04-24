import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Button } from './components/ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from './components/ui/input';
import { TipTap } from './components/TipTap';

const formSchema = z.object({
    title: z
        .string()
        .min(5, { message: 'Title is too short' })
        .max(100, { message: 'Title too long' }),
    price: z
        .number()
        .min(5, { message: 'Price is too short' })
        .max(100, { message: 'Price too long' }),
    description: z
        .string()
        .min(5, { message: 'Description is too short' })
        .max(100, { message: 'Description too long' })
        .trim(),
});

function App() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            title: '',
            price: 29.99,
            description: '',
        },
    });

    function handleOnSubmit(values: z.infer<typeof formSchema>) {
        // Submit form values
        alert(values.title);
    }

    return (
        <main className="p-24">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleOnSubmit)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Main title for your Product" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <TipTap description={field.name} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className="my-4" type="submit">
                        Submit
                    </Button>
                </form>
            </Form>
        </main>
    );
}

export default App;
