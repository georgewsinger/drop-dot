goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31547__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31548__i = 0, G__31548__a = new Array(arguments.length -  0);
while (G__31548__i < G__31548__a.length) {G__31548__a[G__31548__i] = arguments[G__31548__i + 0]; ++G__31548__i;}
  args = new cljs.core.IndexedSeq(G__31548__a,0);
} 
return G__31547__delegate.call(this,args);};
G__31547.cljs$lang$maxFixedArity = 0;
G__31547.cljs$lang$applyTo = (function (arglist__31549){
var args = cljs.core.seq(arglist__31549);
return G__31547__delegate(args);
});
G__31547.cljs$core$IFn$_invoke$arity$variadic = G__31547__delegate;
return G__31547;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31550__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31550 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31551__i = 0, G__31551__a = new Array(arguments.length -  0);
while (G__31551__i < G__31551__a.length) {G__31551__a[G__31551__i] = arguments[G__31551__i + 0]; ++G__31551__i;}
  args = new cljs.core.IndexedSeq(G__31551__a,0);
} 
return G__31550__delegate.call(this,args);};
G__31550.cljs$lang$maxFixedArity = 0;
G__31550.cljs$lang$applyTo = (function (arglist__31552){
var args = cljs.core.seq(arglist__31552);
return G__31550__delegate(args);
});
G__31550.cljs$core$IFn$_invoke$arity$variadic = G__31550__delegate;
return G__31550;
})()
;

return null;
});
