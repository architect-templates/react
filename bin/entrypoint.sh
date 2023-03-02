#!/bin/sh -e

touch .env
echo "REACT_APP_API_ADDR: $REACT_APP_API_ADDR" > .env

exec "$@"
