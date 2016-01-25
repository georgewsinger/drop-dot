goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__255023__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__255023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255024__i = 0, G__255024__a = new Array(arguments.length -  0);
while (G__255024__i < G__255024__a.length) {G__255024__a[G__255024__i] = arguments[G__255024__i + 0]; ++G__255024__i;}
  args = new cljs.core.IndexedSeq(G__255024__a,0);
} 
return G__255023__delegate.call(this,args);};
G__255023.cljs$lang$maxFixedArity = 0;
G__255023.cljs$lang$applyTo = (function (arglist__255025){
var args = cljs.core.seq(arglist__255025);
return G__255023__delegate(args);
});
G__255023.cljs$core$IFn$_invoke$arity$variadic = G__255023__delegate;
return G__255023;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__255026__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__255026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__255027__i = 0, G__255027__a = new Array(arguments.length -  0);
while (G__255027__i < G__255027__a.length) {G__255027__a[G__255027__i] = arguments[G__255027__i + 0]; ++G__255027__i;}
  args = new cljs.core.IndexedSeq(G__255027__a,0);
} 
return G__255026__delegate.call(this,args);};
G__255026.cljs$lang$maxFixedArity = 0;
G__255026.cljs$lang$applyTo = (function (arglist__255028){
var args = cljs.core.seq(arglist__255028);
return G__255026__delegate(args);
});
G__255026.cljs$core$IFn$_invoke$arity$variadic = G__255026__delegate;
return G__255026;
})()
;

return null;
});
