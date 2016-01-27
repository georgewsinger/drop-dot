goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__81310__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__81310 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81311__i = 0, G__81311__a = new Array(arguments.length -  0);
while (G__81311__i < G__81311__a.length) {G__81311__a[G__81311__i] = arguments[G__81311__i + 0]; ++G__81311__i;}
  args = new cljs.core.IndexedSeq(G__81311__a,0);
} 
return G__81310__delegate.call(this,args);};
G__81310.cljs$lang$maxFixedArity = 0;
G__81310.cljs$lang$applyTo = (function (arglist__81312){
var args = cljs.core.seq(arglist__81312);
return G__81310__delegate(args);
});
G__81310.cljs$core$IFn$_invoke$arity$variadic = G__81310__delegate;
return G__81310;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__81313__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__81313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81314__i = 0, G__81314__a = new Array(arguments.length -  0);
while (G__81314__i < G__81314__a.length) {G__81314__a[G__81314__i] = arguments[G__81314__i + 0]; ++G__81314__i;}
  args = new cljs.core.IndexedSeq(G__81314__a,0);
} 
return G__81313__delegate.call(this,args);};
G__81313.cljs$lang$maxFixedArity = 0;
G__81313.cljs$lang$applyTo = (function (arglist__81315){
var args = cljs.core.seq(arglist__81315);
return G__81313__delegate(args);
});
G__81313.cljs$core$IFn$_invoke$arity$variadic = G__81313__delegate;
return G__81313;
})()
;

return null;
});
