/*
Twitter API

This is a sample server Twitter API server.

API version: 1.0.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"time"
)

// checks if the TweetsPost201Response type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TweetsPost201Response{}

// TweetsPost201Response struct for TweetsPost201Response
type TweetsPost201Response struct {
	Id *int `json:"id,omitempty"`
	CreatedAt *time.Time `json:"created_at,omitempty"`
}

// NewTweetsPost201Response instantiates a new TweetsPost201Response object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTweetsPost201Response() *TweetsPost201Response {
	this := TweetsPost201Response{}
	return &this
}

// NewTweetsPost201ResponseWithDefaults instantiates a new TweetsPost201Response object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTweetsPost201ResponseWithDefaults() *TweetsPost201Response {
	this := TweetsPost201Response{}
	return &this
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *TweetsPost201Response) GetId() int {
	if o == nil || IsNil(o.Id) {
		var ret int
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TweetsPost201Response) GetIdOk() (*int, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *TweetsPost201Response) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given int and assigns it to the Id field.
func (o *TweetsPost201Response) SetId(v int) {
	o.Id = &v
}

// GetCreatedAt returns the CreatedAt field value if set, zero value otherwise.
func (o *TweetsPost201Response) GetCreatedAt() time.Time {
	if o == nil || IsNil(o.CreatedAt) {
		var ret time.Time
		return ret
	}
	return *o.CreatedAt
}

// GetCreatedAtOk returns a tuple with the CreatedAt field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TweetsPost201Response) GetCreatedAtOk() (*time.Time, bool) {
	if o == nil || IsNil(o.CreatedAt) {
		return nil, false
	}
	return o.CreatedAt, true
}

// HasCreatedAt returns a boolean if a field has been set.
func (o *TweetsPost201Response) HasCreatedAt() bool {
	if o != nil && !IsNil(o.CreatedAt) {
		return true
	}

	return false
}

// SetCreatedAt gets a reference to the given time.Time and assigns it to the CreatedAt field.
func (o *TweetsPost201Response) SetCreatedAt(v time.Time) {
	o.CreatedAt = &v
}

func (o TweetsPost201Response) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TweetsPost201Response) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.CreatedAt) {
		toSerialize["created_at"] = o.CreatedAt
	}
	return toSerialize, nil
}

type NullableTweetsPost201Response struct {
	value *TweetsPost201Response
	isSet bool
}

func (v NullableTweetsPost201Response) Get() *TweetsPost201Response {
	return v.value
}

func (v *NullableTweetsPost201Response) Set(val *TweetsPost201Response) {
	v.value = val
	v.isSet = true
}

func (v NullableTweetsPost201Response) IsSet() bool {
	return v.isSet
}

func (v *NullableTweetsPost201Response) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTweetsPost201Response(val *TweetsPost201Response) *NullableTweetsPost201Response {
	return &NullableTweetsPost201Response{value: val, isSet: true}
}

func (v NullableTweetsPost201Response) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTweetsPost201Response) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


