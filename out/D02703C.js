goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__366238__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__366238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__366239__i = 0, G__366239__a = new Array(arguments.length -  0);
while (G__366239__i < G__366239__a.length) {G__366239__a[G__366239__i] = arguments[G__366239__i + 0]; ++G__366239__i;}
  args = new cljs.core.IndexedSeq(G__366239__a,0);
} 
return G__366238__delegate.call(this,args);};
G__366238.cljs$lang$maxFixedArity = 0;
G__366238.cljs$lang$applyTo = (function (arglist__366240){
var args = cljs.core.seq(arglist__366240);
return G__366238__delegate(args);
});
G__366238.cljs$core$IFn$_invoke$arity$variadic = G__366238__delegate;
return G__366238;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__366241__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__366241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__366242__i = 0, G__366242__a = new Array(arguments.length -  0);
while (G__366242__i < G__366242__a.length) {G__366242__a[G__366242__i] = arguments[G__366242__i + 0]; ++G__366242__i;}
  args = new cljs.core.IndexedSeq(G__366242__a,0);
} 
return G__366241__delegate.call(this,args);};
G__366241.cljs$lang$maxFixedArity = 0;
G__366241.cljs$lang$applyTo = (function (arglist__366243){
var args = cljs.core.seq(arglist__366243);
return G__366241__delegate(args);
});
G__366241.cljs$core$IFn$_invoke$arity$variadic = G__366241__delegate;
return G__366241;
})()
;

return null;
});
