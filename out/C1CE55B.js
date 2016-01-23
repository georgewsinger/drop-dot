goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28021__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28022__i = 0, G__28022__a = new Array(arguments.length -  0);
while (G__28022__i < G__28022__a.length) {G__28022__a[G__28022__i] = arguments[G__28022__i + 0]; ++G__28022__i;}
  args = new cljs.core.IndexedSeq(G__28022__a,0);
} 
return G__28021__delegate.call(this,args);};
G__28021.cljs$lang$maxFixedArity = 0;
G__28021.cljs$lang$applyTo = (function (arglist__28023){
var args = cljs.core.seq(arglist__28023);
return G__28021__delegate(args);
});
G__28021.cljs$core$IFn$_invoke$arity$variadic = G__28021__delegate;
return G__28021;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28024__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28025__i = 0, G__28025__a = new Array(arguments.length -  0);
while (G__28025__i < G__28025__a.length) {G__28025__a[G__28025__i] = arguments[G__28025__i + 0]; ++G__28025__i;}
  args = new cljs.core.IndexedSeq(G__28025__a,0);
} 
return G__28024__delegate.call(this,args);};
G__28024.cljs$lang$maxFixedArity = 0;
G__28024.cljs$lang$applyTo = (function (arglist__28026){
var args = cljs.core.seq(arglist__28026);
return G__28024__delegate(args);
});
G__28024.cljs$core$IFn$_invoke$arity$variadic = G__28024__delegate;
return G__28024;
})()
;

return null;
});
