goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__187273__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__187273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__187274__i = 0, G__187274__a = new Array(arguments.length -  0);
while (G__187274__i < G__187274__a.length) {G__187274__a[G__187274__i] = arguments[G__187274__i + 0]; ++G__187274__i;}
  args = new cljs.core.IndexedSeq(G__187274__a,0);
} 
return G__187273__delegate.call(this,args);};
G__187273.cljs$lang$maxFixedArity = 0;
G__187273.cljs$lang$applyTo = (function (arglist__187275){
var args = cljs.core.seq(arglist__187275);
return G__187273__delegate(args);
});
G__187273.cljs$core$IFn$_invoke$arity$variadic = G__187273__delegate;
return G__187273;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__187276__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__187276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__187277__i = 0, G__187277__a = new Array(arguments.length -  0);
while (G__187277__i < G__187277__a.length) {G__187277__a[G__187277__i] = arguments[G__187277__i + 0]; ++G__187277__i;}
  args = new cljs.core.IndexedSeq(G__187277__a,0);
} 
return G__187276__delegate.call(this,args);};
G__187276.cljs$lang$maxFixedArity = 0;
G__187276.cljs$lang$applyTo = (function (arglist__187278){
var args = cljs.core.seq(arglist__187278);
return G__187276__delegate(args);
});
G__187276.cljs$core$IFn$_invoke$arity$variadic = G__187276__delegate;
return G__187276;
})()
;

return null;
});
