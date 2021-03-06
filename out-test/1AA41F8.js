goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83235__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83236__i = 0, G__83236__a = new Array(arguments.length -  0);
while (G__83236__i < G__83236__a.length) {G__83236__a[G__83236__i] = arguments[G__83236__i + 0]; ++G__83236__i;}
  args = new cljs.core.IndexedSeq(G__83236__a,0);
} 
return G__83235__delegate.call(this,args);};
G__83235.cljs$lang$maxFixedArity = 0;
G__83235.cljs$lang$applyTo = (function (arglist__83237){
var args = cljs.core.seq(arglist__83237);
return G__83235__delegate(args);
});
G__83235.cljs$core$IFn$_invoke$arity$variadic = G__83235__delegate;
return G__83235;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83238__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83239__i = 0, G__83239__a = new Array(arguments.length -  0);
while (G__83239__i < G__83239__a.length) {G__83239__a[G__83239__i] = arguments[G__83239__i + 0]; ++G__83239__i;}
  args = new cljs.core.IndexedSeq(G__83239__a,0);
} 
return G__83238__delegate.call(this,args);};
G__83238.cljs$lang$maxFixedArity = 0;
G__83238.cljs$lang$applyTo = (function (arglist__83240){
var args = cljs.core.seq(arglist__83240);
return G__83238__delegate(args);
});
G__83238.cljs$core$IFn$_invoke$arity$variadic = G__83238__delegate;
return G__83238;
})()
;

return null;
});
