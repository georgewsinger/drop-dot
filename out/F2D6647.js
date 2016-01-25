goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__104961__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__104961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104962__i = 0, G__104962__a = new Array(arguments.length -  0);
while (G__104962__i < G__104962__a.length) {G__104962__a[G__104962__i] = arguments[G__104962__i + 0]; ++G__104962__i;}
  args = new cljs.core.IndexedSeq(G__104962__a,0);
} 
return G__104961__delegate.call(this,args);};
G__104961.cljs$lang$maxFixedArity = 0;
G__104961.cljs$lang$applyTo = (function (arglist__104963){
var args = cljs.core.seq(arglist__104963);
return G__104961__delegate(args);
});
G__104961.cljs$core$IFn$_invoke$arity$variadic = G__104961__delegate;
return G__104961;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__104964__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__104964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__104965__i = 0, G__104965__a = new Array(arguments.length -  0);
while (G__104965__i < G__104965__a.length) {G__104965__a[G__104965__i] = arguments[G__104965__i + 0]; ++G__104965__i;}
  args = new cljs.core.IndexedSeq(G__104965__a,0);
} 
return G__104964__delegate.call(this,args);};
G__104964.cljs$lang$maxFixedArity = 0;
G__104964.cljs$lang$applyTo = (function (arglist__104966){
var args = cljs.core.seq(arglist__104966);
return G__104964__delegate(args);
});
G__104964.cljs$core$IFn$_invoke$arity$variadic = G__104964__delegate;
return G__104964;
})()
;

return null;
});
