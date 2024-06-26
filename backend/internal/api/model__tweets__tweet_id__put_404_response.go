/*
Twitter API

This is a sample server Twitter API server.

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the TweetsTweetIdPut404Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TweetsTweetIdPut404Response{}

// TweetsTweetIdPut404Response struct for TweetsTweetIdPut404Response
type TweetsTweetIdPut404Response struct {
	Message *string `json:"message,omitempty"`
}

// NewTweetsTweetIdPut404Response instantiates a new TweetsTweetIdPut404Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTweetsTweetIdPut404Response() *TweetsTweetIdPut404Response {
	this := TweetsTweetIdPut404Response{}
	return &this
}

// NewTweetsTweetIdPut404ResponseWithDefaults instantiates a new TweetsTweetIdPut404Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTweetsTweetIdPut404ResponseWithDefaults() *TweetsTweetIdPut404Response {
	this := TweetsTweetIdPut404Response{}
	return &this
}

// GetMessage returns the Message field value if set, zero value otherwise.
func (o *TweetsTweetIdPut404Response) GetMessage() string {
	if o == nil || IsNil(o.Message) {
		var ret string
		return ret
	}
	return *o.Message
}

// GetMessageOk returns a tuple with the Message field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TweetsTweetIdPut404Response) GetMessageOk() (*string, bool) {
	if o == nil || IsNil(o.Message) {
		return nil, false
	}
	return o.Message, true
}

// HasMessage returns a boolean if a field has been set.
func (o *TweetsTweetIdPut404Response) HasMessage() bool {
	if o != nil && !IsNil(o.Message) {
		return true
	}

	return false
}

// SetMessage gets a reference to the given string and assigns it to the Message field.
func (o *TweetsTweetIdPut404Response) SetMessage(v string) {
	o.Message = &v
}

func (o TweetsTweetIdPut404Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TweetsTweetIdPut404Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Message) {
		toSerialize["message"] = o.Message
	}
	return toSerialize, nil
}

type NullableTweetsTweetIdPut404Response struct {
	value *TweetsTweetIdPut404Response
	isSet bool
}

func (v NullableTweetsTweetIdPut404Response) Get() *TweetsTweetIdPut404Response {
	return v.value
}

func (v *NullableTweetsTweetIdPut404Response) Set(val *TweetsTweetIdPut404Response) {
	v.value = val
	v.isSet = true
}

func (v NullableTweetsTweetIdPut404Response) IsSet() bool {
	return v.isSet
}

func (v *NullableTweetsTweetIdPut404Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTweetsTweetIdPut404Response(val *TweetsTweetIdPut404Response) *NullableTweetsTweetIdPut404Response {
	return &NullableTweetsTweetIdPut404Response{value: val, isSet: true}
}

func (v NullableTweetsTweetIdPut404Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTweetsTweetIdPut404Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


