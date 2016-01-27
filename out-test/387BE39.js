goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__106238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__106238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__106239__i = 0, G__106239__a = new Array(arguments.length -  0);
while (G__106239__i < G__106239__a.length) {G__106239__a[G__106239__i] = arguments[G__106239__i + 0]; ++G__106239__i;}
  args = new cljs.core.IndexedSeq(G__106239__a,0);
} 
return G__106238__delegate.call(this,args);};
G__106238.cljs$lang$maxFixedArity = 0;
G__106238.cljs$lang$applyTo = (function (arglist__106240){
var args = cljs.core.seq(arglist__106240);
return G__106238__delegate(args);
});
G__106238.cljs$core$IFn$_invoke$arity$variadic = G__106238__delegate;
return G__106238;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__106241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__106241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__106242__i = 0, G__106242__a = new Array(arguments.length -  0);
while (G__106242__i < G__106242__a.length) {G__106242__a[G__106242__i] = arguments[G__106242__i + 0]; ++G__106242__i;}
  args = new cljs.core.IndexedSeq(G__106242__a,0);
} 
return G__106241__delegate.call(this,args);};
G__106241.cljs$lang$maxFixedArity = 0;
G__106241.cljs$lang$applyTo = (function (arglist__106243){
var args = cljs.core.seq(arglist__106243);
return G__106241__delegate(args);
});
G__106241.cljs$core$IFn$_invoke$arity$variadic = G__106241__delegate;
return G__106241;
})()
;

return null;
});
