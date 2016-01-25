goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62541__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62541 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62542__i = 0, G__62542__a = new Array(arguments.length -  0);
while (G__62542__i < G__62542__a.length) {G__62542__a[G__62542__i] = arguments[G__62542__i + 0]; ++G__62542__i;}
  args = new cljs.core.IndexedSeq(G__62542__a,0);
} 
return G__62541__delegate.call(this,args);};
G__62541.cljs$lang$maxFixedArity = 0;
G__62541.cljs$lang$applyTo = (function (arglist__62543){
var args = cljs.core.seq(arglist__62543);
return G__62541__delegate(args);
});
G__62541.cljs$core$IFn$_invoke$arity$variadic = G__62541__delegate;
return G__62541;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62544__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62545__i = 0, G__62545__a = new Array(arguments.length -  0);
while (G__62545__i < G__62545__a.length) {G__62545__a[G__62545__i] = arguments[G__62545__i + 0]; ++G__62545__i;}
  args = new cljs.core.IndexedSeq(G__62545__a,0);
} 
return G__62544__delegate.call(this,args);};
G__62544.cljs$lang$maxFixedArity = 0;
G__62544.cljs$lang$applyTo = (function (arglist__62546){
var args = cljs.core.seq(arglist__62546);
return G__62544__delegate(args);
});
G__62544.cljs$core$IFn$_invoke$arity$variadic = G__62544__delegate;
return G__62544;
})()
;

return null;
});
