goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__70238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__70238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70239__i = 0, G__70239__a = new Array(arguments.length -  0);
while (G__70239__i < G__70239__a.length) {G__70239__a[G__70239__i] = arguments[G__70239__i + 0]; ++G__70239__i;}
  args = new cljs.core.IndexedSeq(G__70239__a,0);
} 
return G__70238__delegate.call(this,args);};
G__70238.cljs$lang$maxFixedArity = 0;
G__70238.cljs$lang$applyTo = (function (arglist__70240){
var args = cljs.core.seq(arglist__70240);
return G__70238__delegate(args);
});
G__70238.cljs$core$IFn$_invoke$arity$variadic = G__70238__delegate;
return G__70238;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__70241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__70241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70242__i = 0, G__70242__a = new Array(arguments.length -  0);
while (G__70242__i < G__70242__a.length) {G__70242__a[G__70242__i] = arguments[G__70242__i + 0]; ++G__70242__i;}
  args = new cljs.core.IndexedSeq(G__70242__a,0);
} 
return G__70241__delegate.call(this,args);};
G__70241.cljs$lang$maxFixedArity = 0;
G__70241.cljs$lang$applyTo = (function (arglist__70243){
var args = cljs.core.seq(arglist__70243);
return G__70241__delegate(args);
});
G__70241.cljs$core$IFn$_invoke$arity$variadic = G__70241__delegate;
return G__70241;
})()
;

return null;
});
