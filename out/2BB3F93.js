goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31492__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31493__i = 0, G__31493__a = new Array(arguments.length -  0);
while (G__31493__i < G__31493__a.length) {G__31493__a[G__31493__i] = arguments[G__31493__i + 0]; ++G__31493__i;}
  args = new cljs.core.IndexedSeq(G__31493__a,0);
} 
return G__31492__delegate.call(this,args);};
G__31492.cljs$lang$maxFixedArity = 0;
G__31492.cljs$lang$applyTo = (function (arglist__31494){
var args = cljs.core.seq(arglist__31494);
return G__31492__delegate(args);
});
G__31492.cljs$core$IFn$_invoke$arity$variadic = G__31492__delegate;
return G__31492;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31495__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31496__i = 0, G__31496__a = new Array(arguments.length -  0);
while (G__31496__i < G__31496__a.length) {G__31496__a[G__31496__i] = arguments[G__31496__i + 0]; ++G__31496__i;}
  args = new cljs.core.IndexedSeq(G__31496__a,0);
} 
return G__31495__delegate.call(this,args);};
G__31495.cljs$lang$maxFixedArity = 0;
G__31495.cljs$lang$applyTo = (function (arglist__31497){
var args = cljs.core.seq(arglist__31497);
return G__31495__delegate(args);
});
G__31495.cljs$core$IFn$_invoke$arity$variadic = G__31495__delegate;
return G__31495;
})()
;

return null;
});
