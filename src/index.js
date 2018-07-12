import RabbitMQPubSub from '@mark48evo/rabbitmq-pubsub';

const defaultConfig = {
  exchangeName: process.env.ESC_MESSAGES_EXCHANGE_NAME || 'esc_messages',
  queueNamePrefix: process.env.ESC_MESSAGES_QUEUE_NAME_PREFIX || 'esc_messages',
};

/**
 * @param {Channel} channel
 * @param {RabbitMQPubSubOptions} options
 * @returns {Promise<RabbitMQPubSub>}
 */
export default async function (channel, options = {}) {
  const config = { ...defaultConfig, ...options };

  const systemEvents = new RabbitMQPubSub(channel, config);
  await systemEvents.setup();

  return systemEvents;
}
