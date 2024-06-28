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

// checks if the StatusGet200Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &StatusGet200Response{}

// StatusGet200Response struct for StatusGet200Response
type StatusGet200Response struct {
	Status *string `json:"status,omitempty"`
}

// NewStatusGet200Response instantiates a new StatusGet200Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewStatusGet200Response() *StatusGet200Response {
	this := StatusGet200Response{}
	return &this
}

// NewStatusGet200ResponseWithDefaults instantiates a new StatusGet200Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewStatusGet200ResponseWithDefaults() *StatusGet200Response {
	this := StatusGet200Response{}
	return &this
}

// GetStatus returns the Status field value if set, zero value otherwise.
func (o *StatusGet200Response) GetStatus() string {
	if o == nil || IsNil(o.Status) {
		var ret string
		return ret
	}
	return *o.Status
}

// GetStatusOk returns a tuple with the Status field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *StatusGet200Response) GetStatusOk() (*string, bool) {
	if o == nil || IsNil(o.Status) {
		return nil, false
	}
	return o.Status, true
}

// HasStatus returns a boolean if a field has been set.
func (o *StatusGet200Response) HasStatus() bool {
	if o != nil && !IsNil(o.Status) {
		return true
	}

	return false
}

// SetStatus gets a reference to the given string and assigns it to the Status field.
func (o *StatusGet200Response) SetStatus(v string) {
	o.Status = &v
}

func (o StatusGet200Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o StatusGet200Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Status) {
		toSerialize["status"] = o.Status
	}
	return toSerialize, nil
}

type NullableStatusGet200Response struct {
	value *StatusGet200Response
	isSet bool
}

func (v NullableStatusGet200Response) Get() *StatusGet200Response {
	return v.value
}

func (v *NullableStatusGet200Response) Set(val *StatusGet200Response) {
	v.value = val
	v.isSet = true
}

func (v NullableStatusGet200Response) IsSet() bool {
	return v.isSet
}

func (v *NullableStatusGet200Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableStatusGet200Response(val *StatusGet200Response) *NullableStatusGet200Response {
	return &NullableStatusGet200Response{value: val, isSet: true}
}

func (v NullableStatusGet200Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableStatusGet200Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

