-- Drop foreign keys from echo_push_subscription - T306473 / T322143
ALTER TABLE /*_*/echo_push_subscription DROP FOREIGN KEY /*_*/echo_push_subscription_ibfk_2;
