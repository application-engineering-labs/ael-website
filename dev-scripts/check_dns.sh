#!/bin/bash

DOMAIN="application-engineering-labs.com"
EXPECTED_IP="192.64.119.65"
TIMEOUT=15

echo "Monitoring DNS for $DOMAIN..."

while true; do
    # Perform a DNS lookup using dig
    CURRENT_IP=$(dig +short $DOMAIN)
    NOW="$(date +"%T")"

    if [ -z "$CURRENT_IP" ]; then
        echo "$NOW: No response from DNS server. Retrying in $TIMEOUT seconds..."
    elif [ "$CURRENT_IP" != "$EXPECTED_IP" ]; then
        echo "$NOW: DNS IP has changed!"
        echo "New IP address: $CURRENT_IP"
        echo "Exiting monitoring."
        exit 0
    else
        echo "$NOW: No change detected. Current IP: $CURRENT_IP"
    fi

    # Wait for 15s before checking again
    sleep $TIMEOUT
done
