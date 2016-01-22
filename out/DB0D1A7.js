goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21930__i = 0, G__21930__a = new Array(arguments.length -  0);
while (G__21930__i < G__21930__a.length) {G__21930__a[G__21930__i] = arguments[G__21930__i + 0]; ++G__21930__i;}
  args = new cljs.core.IndexedSeq(G__21930__a,0);
} 
return G__21929__delegate.call(this,args);};
G__21929.cljs$lang$maxFixedArity = 0;
G__21929.cljs$lang$applyTo = (function (arglist__21931){
var args = cljs.core.seq(arglist__21931);
return G__21929__delegate(args);
});
G__21929.cljs$core$IFn$_invoke$arity$variadic = G__21929__delegate;
return G__21929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21933__i = 0, G__21933__a = new Array(arguments.length -  0);
while (G__21933__i < G__21933__a.length) {G__21933__a[G__21933__i] = arguments[G__21933__i + 0]; ++G__21933__i;}
  args = new cljs.core.IndexedSeq(G__21933__a,0);
} 
return G__21932__delegate.call(this,args);};
G__21932.cljs$lang$maxFixedArity = 0;
G__21932.cljs$lang$applyTo = (function (arglist__21934){
var args = cljs.core.seq(arglist__21934);
return G__21932__delegate(args);
});
G__21932.cljs$core$IFn$_invoke$arity$variadic = G__21932__delegate;
return G__21932;
})()
;

return null;
});
