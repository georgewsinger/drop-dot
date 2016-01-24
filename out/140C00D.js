goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60878__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60879__i = 0, G__60879__a = new Array(arguments.length -  0);
while (G__60879__i < G__60879__a.length) {G__60879__a[G__60879__i] = arguments[G__60879__i + 0]; ++G__60879__i;}
  args = new cljs.core.IndexedSeq(G__60879__a,0);
} 
return G__60878__delegate.call(this,args);};
G__60878.cljs$lang$maxFixedArity = 0;
G__60878.cljs$lang$applyTo = (function (arglist__60880){
var args = cljs.core.seq(arglist__60880);
return G__60878__delegate(args);
});
G__60878.cljs$core$IFn$_invoke$arity$variadic = G__60878__delegate;
return G__60878;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60881__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60881 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60882__i = 0, G__60882__a = new Array(arguments.length -  0);
while (G__60882__i < G__60882__a.length) {G__60882__a[G__60882__i] = arguments[G__60882__i + 0]; ++G__60882__i;}
  args = new cljs.core.IndexedSeq(G__60882__a,0);
} 
return G__60881__delegate.call(this,args);};
G__60881.cljs$lang$maxFixedArity = 0;
G__60881.cljs$lang$applyTo = (function (arglist__60883){
var args = cljs.core.seq(arglist__60883);
return G__60881__delegate(args);
});
G__60881.cljs$core$IFn$_invoke$arity$variadic = G__60881__delegate;
return G__60881;
})()
;

return null;
});
