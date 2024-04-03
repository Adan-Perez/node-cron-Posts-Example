import cron from 'node-cron';
import { mongoConnect } from './db.js';
import { Post } from './schemas/post.schema.js';
import { fetchData } from './data.js';
import { getMessage, transporter } from './utils/consts.js';

await mongoConnect();

cron.schedule('*/10 * * * * *', async () => {
  const randomId = Math.floor(Math.random() * 100) + 1;
  const post = await fetchData(randomId);
  await Post.create(post);

  const info = await transporter.sendMail({
    from: 'example@test.dev',
    to: 'adan-perez@test.dev',
    subject: `New Post: ${post.title}`,
    text: `New post created:\n${post.body} for the user ${post.userId}`,
  });

  console.log('Message sent: %s', info.messageId);

  const message = getMessage(info);
  console.log('Preview URL: %s', message);
});
